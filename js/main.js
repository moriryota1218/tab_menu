'use strict';
{
  // メニュー項目を定数で取得
  const menuItems = document.querySelectorAll('.menu li a');

  // forEach()を使って各要素に対してイベントを設定
  menuItems.forEach(item => {
  // クリックイベントの設定
  item.addEventListener('click', e => { //Eventオブジェクトを受け取る
    e.preventDefault();

    item.classList.add('active');
  });

  });
}
