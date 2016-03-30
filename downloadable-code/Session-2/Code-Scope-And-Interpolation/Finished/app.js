var textBox = document.getElementById("name");

textBox.addEventListener('keypress', 
        function(event){
            console.log('key pressed', event)
        })