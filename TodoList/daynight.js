var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i++;
        }
        // $('body').css('color', color);
        // 모든 a태그를 컨트롤
    }
}
// 객체화 시키기
var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
        //$('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;

        //$('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === '🌙') {
        Body.setBackgroundColor('#FFCD28');
        Body.setColor('white');
        self.value = '☀️';

        Links.setColor('white');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '🌙';

        Links.setColor('blue');
    }
}