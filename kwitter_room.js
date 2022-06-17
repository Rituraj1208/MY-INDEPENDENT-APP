//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkYqPSUnuvBR9o0esFy2OpH3TS8b4YTDU",
      authDomain: "kwitter-6eff3.firebaseapp.com",
      databaseURL: "https://kwitter-6eff3-default-rtdb.firebaseio.com",
      projectId: "kwitter-6eff3",
      storageBucket: "kwitter-6eff3.appspot.com",
      messagingSenderId: "81864546566",
      appId: "1:81864546566:web:3ae3ebe1c65818b3902687"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name".name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}