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
loadUsers('data.json', 'userwidget');
