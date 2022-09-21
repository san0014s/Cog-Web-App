const SESSION_ID = "SESSION_ID";

var SessionState = (function() {

    var getId = function() {
        var id = localStorage.getItem(SESSION_ID)
        if (id === undefined || id === null) {
            return -1;
        }
        else {
            return id;
        }
    };
  
    var setId = function(id_param) {
        localStorage.setItem(SESSION_ID, id_param)
    };
  
    return {
        getId: getId,
        setId: setId
    }
  
  })();
  
  export default SessionState;