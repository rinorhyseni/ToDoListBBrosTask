const API_BASE_ADDRESS = 'http://localhost:3000';

export default class actions {
   static addTask(title: string, description: string, status: string, user: string) {
       const uri = API_BASE_ADDRESS + "/tasks?title=" + title +"?description=" + description + "?status=" + status + "?user="+user;
       return fetch(uri, {
           method: 'POST'
       });
   }
}