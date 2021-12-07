let CRM = require('vtiger')

/**
 * API Reference
 * https://community.vtiger.com/help/vtigercrm/developers/third-party-app-integration.html
 */

const url = 'https://example.com/crm/webservice.php';
const username = 'USERNAME';
const accesstoken = 'ACCESSTOKEN';

let connection = new CRM.Connection(url, username, accesstoken)
connection.login()
  .then(() => connection.query("SELECT * FROM Contacts;"))
  .then((contacts) => {
    console.log(contacts.length)
    contacts.forEach(contact => {
      console.log(contact)
    });
  })
  .catch((error) => {
    //catch error
    console.error(error.message)
  })