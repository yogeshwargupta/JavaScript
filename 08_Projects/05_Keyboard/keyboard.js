const insert = document.getElementById('insert')

window.addEventListener('keydown', (e)=>{
    insert.innerHTML = `
      <div class='color'>
      <table>
      <tr>
        <td>key</td>
        <td>keyCode</td>
        <td>Code</td>
      </tr>
      <tr>
        <td>${e.key === ' '? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.keyCode.toString(16)}</td>
      </tr>
    </table>
      </div>
    `;
})