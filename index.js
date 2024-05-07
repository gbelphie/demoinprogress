// import stylesheets 
import "./style.css"

// import LIFF SDK 
import liff from "@line/liff"

// Body element 
const body = document.getElementById("body")

//Profile elements
const pictureUrl = document.getElementById("pictureUrl")
const userId = document.getElementById("userId")
const displayName = document.getElementById("displayName")
const email = document.getElementbyId("email")

// Button elements 
const btnShare = document.getElementById("btnShare")

async functional main() { 
  // 2. liff.ready 
  liff.ready.then(() => {
    if (liff.getOS() === "ios")
      body.style.backgroundColor = "#888888"  
    }
    if (liff.isInClient()) {
      getUserProfile()
    }
})
  // 3. Try a LIFF function 
  // 4. Check where LIFF was opened 
  // 5. Ca getUserProfile()
  // 10. show share button

  // 1. Inistialise LIFF app)
  await liff.init({liffid:"2004863180-mYK8GkMK"})
}
main(); 

// 6. create getUserProfile()
// *7. Get email 
async function getUserProfile() {
  const profile = await liff.getProfile()
pictureUrl.src = profile.pictureUrl
userId.innerHTML = "<b>userID: </b>" + profile.userId
displayName.innerHTML = "<b>displayName: </b>" + profile.displayName

}
// *8. create shareMsg()
async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: "text",
      text: "Done"
    }
  ])
if (result) {
  alert("Signed In")
} else {
  alert("Unsuccessful")
}
}
// 11. Add a close window 
liff.closeWindow()
// 9. Add event listener to share button 
btnShare.oncllick = () => {
  shareMsg()
}

