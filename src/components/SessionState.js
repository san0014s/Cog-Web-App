var SessionState = (function() {
    var id = -1;
  
    var getId = function() {
        return id;
    };
  
    var setId = function(id_param) {
        id = id_param;     
    };
  
    return {
        getId: getId,
        setId: setId
    }
  
  })();
  
  export default SessionState;