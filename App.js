let App = class {
  constructor(name){
    this.name = name;
    this.el = document.getElementById('countries');
    this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];    
  }

  Count(data) {
    var el = document.getElementById('counter');
    var name = 'country';
    if (el) {
     if (data > 1) {
      name = 'countries';
      el.innerHTML = data + ' ' + name ;
     }
     else{
      el.innerHTML = 'No ' + name;
     }
    }
  };

  FetchAll() {
    var data = '';

    if (this.countries.length > 0) {
      this.countries.forEach(function (name, index) {
          data += '<tr>';
          data += '<td>' + name + '</td>';
          data += '</tr>';
          data += '<td><button onclick="app.Edit(' + index + ')">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + index + ')">Delete</button></td>';
      });
    }

    this.Count(this.countries.length);

    if(this.el){
      return this.el.innerHTML = data;
    }else{
      return null;
    }    
  };

  Add() {
    var el = document.getElementById('add-name');
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  }

  CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
  }

  Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  }

  Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
}
