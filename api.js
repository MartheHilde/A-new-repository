//First set github to public visible

$.ajax ({
    //make call
    url: 'https://api.github.com/repos/MartheHilde/A-new-repository',
    success: function(response) {
        console.log(response)
    }
})