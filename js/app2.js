const get_data = function(api_url) {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': api_url,
        'dataType': "json",
        'success': function(data) {
            json = data;
        }
    });
    return json;
}

/*
loadUsers = function(api, view) {
    template = {
        markup: `
              <li>
                  <strong>
                      {{firstname}} {{lastname}}
                  </strong>
                  </br>
                  {{email}}
              </li>

            `
    };
    var datas = get_data(api);
    var c_template = template.markup;
    loader = document.getElementById(view);
    temp = '';
    datas.forEach(function(data) {
        temp += c_template
            .replace(/\{\{firstname}\}/, data.first_name)
            .replace(/\{\{lastname\}\}/, data.last_name)
            .replace(/\{\{email\}\}/, data.email);
        loader.innerHTML = temp;
    });
}
loadUsers('data.json', 'userwidget'); */

renderTemplate = function(api_url, view) {
    let datas = get_data(api_url);
    let loader = document.getElementById(view);
    let template = ``;
    datas.forEach(function(data){
        template +=
            `
              <li>
                ${data.first_name} ${data.last_name} </br>
                <a href="mailto:${data.email}">${data.email}</a>
              </li>
            `;
        loader.innerHTML = template;
    });
}
renderTemplate('data.json', 'userwidget');
