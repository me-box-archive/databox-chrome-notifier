(function(){var result = localStorage.getItem("fcm");
    if(result){
        document.getElementById('fcm_token').textContent = result;
    }
})();
