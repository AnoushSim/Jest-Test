let http =require('./req');

exports.getUserName =  function (userID) {
    return http.req('/users/' + userID).then(user => user.name);
}