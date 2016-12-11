/*
 * REQUEST_AIRPORTS: 应用开始取回所有的航班信息，异步操作
 * RECEIVE_AIRPORTS: 表示取回航班信息成功或者失败
 * CHOOSE_AIRPORT:   表示用户选择航班（起点或终点），同步动作
 * REQUEST_TICKETS:  当起点和终点都选择了，异步操作取回数据
 * RECEIVE_TICKETS:  表示取回票成功或失败
 */

export const REQUEST_AIRPORTS = 'request airposts';
export const RECEIVE_AIRPORTS = 'receive airposts';
export const CHOOSE_AIRPORT = 'choose airport';
export const REQUEST_TICKETS = 'request tickets';
export const RECEIVE_TICKETS = 'receive tickets';
