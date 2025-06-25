<script>
    var dmca = document.getElementById("dmca");
    dmca.style.position = "absolute";
    dmca.style.left = "50%";
    dmca.style.top = "50%";
    dmca.style.transform = "translate(-50%, -50%)";
    dmca.style.marginLeft = "-50px";

    // if the website was opened with a "?ref=dscrd" parameter, change the dscrd1 text to "elbayxsv#0001", bold the "#0001" part and make it a link to my discord profile
    if (window.location.href.indexOf("?ref=dscrd") > -1) {
        document.getElementById("dscrd1").innerHTML = "elbayxsv<span style='font-weight: bold;font-color:#fff'><a href='https://discord.com/users/386421496463097857' target='_blank'>#0001</a></span>";
    }



// when the website is opened, send an embed to discord webhook 
// display Location, the IP adress, the device type, the browser and the operating system
// display the referrer if there is one
// display the time when the website was opened

// Function to get the user's IP address
async function getIpAddress() {
  const response = await fetch('https://api64.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
}

// Function to send a webhook
async function sendWebhook(ipAddress, country, time) {
  const webhookUrl = 'https://discordapp.com/api/webhooks/1387458446772666469/QnlM0b6A2svxUBqNRgxbEpCHT-vgbDfZamHN-YGoLE5ps4uq54-KFC-CPjHQmvxAypZZ';

  const payload = {
    content: 'Website visited!',
    embeds: [
      {
        title: 'Visitor Information',
        fields: [
          { name: 'IP Address', value: ipAddress, inline: true },
          { name: 'Country', value: country, inline: true },
          { name: 'Time', value: time, inline: true },
        ],
      },
    ],
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}

// When the page is loaded, get the IP address and send the webhook
window.addEventListener('load', async () => {
  try {
    const ipAddress = await getIpAddress();
    
    // For demonstration purposes, you can use a dummy country and time
    const country = 'United States';
    const time = new Date().toLocaleString();

    await sendWebhook(ipAddress, country, time);
  } catch (error) {
    console.error('Error:', error);
  }
});



    // if the user has discord opened in the background, make a popup appear saying "I see you have discord opened in the background, add me on discord! (elbayxsv#0001)" 
    // if the user clicks on the popup, it will open a new tab with my discord profile
    // if the user clicks on the "x" button, the popup will disappear
    // if the user clicks on the "don't show again" button, the popup will disappear and the "don't show again" button will be replaced with "show again" button

    var discord = document.getElementById("dscrd1");
    var popup = document.getElementById("popup");
    var close = document.getElementById("close");
    var dontshow = document.getElementById("dontshow");
    var show = document.getElementById("show");

    discord.addEventListener("click", function() {
        popup.style.display = "block";
    }); 

    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    dontshow.addEventListener("click", function() {
        popup.style.display = "none";
        dontshow.style.display = "none";
        show.style.display = "block";
    });

    show.addEventListener("click", function() {
        popup.style.display = "block";
        dontshow.style.display = "block";
        show.style.display = "none";
    });

   
   
       if (window.location.href.indexOf("?ref=dscrd") > -1) {
        document.getElementById("meta-thumbnail").content = "https://media.discordapp.net/attachments/1075321392934952971/1075750894894862346/2323exjs.png?width=720&height=376";
        document.getElementById("meta-description").content = "Add me on discord! (elbayxsv#0001)";
        document.title = "Add me on discord! (elbayxsv#0001)";
        document.getElementById("meta-title").content = "Add me on discord! (elbayxsv#0001)";
    }    

  

</script>

<style>
   ::-webkit-scrollbar { 
    display: none;  /* Chrome Safari */
}
   
   
</style>


<script>
console.log("%cEXJS STUDIOS DEV", "font-family: 'Red Hat Display', sans-serif; font-size: 50px; color: red;");
// make the add me on discord button blurry



</script>
