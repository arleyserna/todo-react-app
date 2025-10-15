/* We just get what we need from local Storage (Value converted as JSON) from key value pair */

export const getTaskList = () => Object.entries(localStorage).map(item => JSON.parse(item[1]));