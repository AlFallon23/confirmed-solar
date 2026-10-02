(function(){
  var qty=document.getElementById('qty'),rng=document.getElementById('rng'),
      amt=document.getElementById('amt'),sub=document.getElementById('sub'),mail=document.getElementById('mail');
  function rate(){var r=document.querySelector('input[name=p]:checked');return r?Number(r.value):1}
  function fmt(n){return n.toLocaleString('en-US')}
  function update(src){
    var n=Math.max(0,Math.floor(Number(qty.value)||0));
    if(src==='rng'){n=Number(rng.value);qty.value=n}
    if(src==='qty'&&n>=Number(rng.min)&&n<=Number(rng.max))rng.value=n;
    var r=rate(),total=n*r,kind=r===1?'address':'filtered record',plural=n===1?kind:(r===1?'addresses':'filtered records');
    amt.textContent='$'+fmt(total);
    sub.textContent=fmt(n)+' '+plural+' at $'+r+' each, before any bulk discount.';
    var body='Hi Alex,\n\nI would like a quote for '+fmt(n)+' '+plural+' (list estimate $'+fmt(total)+').\n\nCompany:\nCounties or states:\nFilters (age, size):\n';
    mail.href='mailto:alfall0904@gmail.com?subject='+encodeURIComponent('Quote request: '+fmt(n)+' '+plural)+'&body='+encodeURIComponent(body);
  }
  qty.addEventListener('input',function(){update('qty')});
  rng.addEventListener('input',function(){update('rng')});
  document.querySelectorAll('input[name=p]').forEach(function(e){e.addEventListener('change',function(){update()})});
  update();
})();
