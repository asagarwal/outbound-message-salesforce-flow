export default defineComponent({
  async run({ steps, $ }) {
    const headers = {}
    var body;
    body = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">';
    body += '<soapenv:Body>';
    body += '<notificationsResponse xmlns="http://soap.sforce.com/2005/09/outbound">';
    body += '<Ack>true</Ack>';
    body += '</notificationsResponse>';
    body += '</soapenv:Body>';
    body += '</soapenv:Envelope>';
    

    await $.respond({
      status: 200,
      headers,
      body,
    })
  },
})
