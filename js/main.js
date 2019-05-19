'use strict';
{
  // メニュー項目を定数で取得
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  // forEach()を使って各要素に対してイベントを設定
  menuItems.forEach(clickedItem => {
    // クリックイベントの設定
    clickedItem.addEventListener('click', e => { //Eventオブジェクトを受け取る
      e.preventDefault();

      // activeクラスを外す処理
      menuItems.forEach(item => {
        item.classList.remove('active');
      });

      clickedItem.classList.add('active');

      // conentからactiveクラスを外す処理
      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });

  });
}
