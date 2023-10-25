document.addEventListener('DOMContentLoaded', function() {
    const massageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('chat');

    function dispalyMessage(message) {
        const massageElement = document.createElement('p');
        massageElement.textContent = message;
        messageContainer.appendChild(massageElement);
    }

    massageForm.addEventListener('submit', function(e) {
       e.preventDefault();

       const message = messageInput.value;
       messageInput.value = '';


       fetch('/api/messages', {
       })
       .then(response => response.json())
       .then(data => {
            if (data.success) {
                dispalyMessage(message);
            }
       })
       .catch(err => {
            console.error('ERROR', err);
       });
    });
    fetch('file:///c%3A/Users/user/Desktop/js/modul4/project_primer/index.html#')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error('ERROR', err);
    });
    const form = document.getElementById('addRecordForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const data = {
            title: title,
            content: content
        };

        fetch('/api/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            
            if (result.success) {
                updateRecordList();
                
                showMessage('Record added successfully');
                
                form.reset();
            } 
            else {
                showMessage('Error adding record');
            }
        })
       .catch(err => {
        console.error('ERROR', err);
        showMessage('Query sending error');
        }); 
       });

});

function updateRecordList() {
    const recordList = document.getElementById('record-list');
    recordList.innerHTML = ''; // Очищаем содержимое элемента

    // Получение данных с сервера
    fetch('/api/records')
        .then(response => response.json())
        .then(data => {
            // Создание и добавление элементов в DOM для каждой записи
            data.forEach(record => {
                const recordElement = document.createElement('li');
                recordElement.textContent = record.title;
                recordList.appendChild(recordElement);
            });
        })
        .catch(err => {
            console.error('ERROR', err);
            showMessage('Error fetching records');
        });
}

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    document.body.appendChild(messageElement);

    setTimeout(() => {
        document.body.removeChild(messageElement);
    }, 5000); // Удалить сообщение через 5 секунд.
}


window.addEventListener('load', function() {

});

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {

});


var xhr = new XMLHttpRequest();

xhr.open("GET", 'file:///c%3A/Users/user/Desktop/js/modul4/project_primer/index.html#')
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
    }
};
xhr.send();