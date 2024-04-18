function nightday_handler(self) {
    var a = document.querySelector('body');
    var b = document.querySelectorAll('.card');
    var c = document.querySelectorAll('.orange')


    if (this.value === 'night') {
        self.value = 'day';
        a.style.color = 'white';
        a.style.backgroundColor = 'black';

        b.forEach(data => {
            data.style.Color = 'white';
            data.style.backgroundColor = 'black';
        });
        c.forEach(data => {
            data.style.Color = 'white';
            data.style.backgroundColor = 'black';
        });
        this.value = 'day';
    } else {
        self.value = 'night';
        a.style.color = 'black';
        a.style.backgroundColor = 'white';

        b.forEach(data => {
            data.style.Color = 'black';
            data.style.backgroundColor = 'white';
        });
        c.forEach(data => {
            data.style.Color = 'black';
            data.style.backgroundColor = 'orange';
        });


        this.value = 'night';
    }
}