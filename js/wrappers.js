var wrappers = {}
wrappers.getSession = function (username,password){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/session",{method:"POST",body:JSON.stringify({username:username,password:password}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.newSession = function (username,password){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/session",{method:"DELETE",body:JSON.stringify({username:username,password:password}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.newAccount = function (username,password){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/",{method:"PUT",body:JSON.stringify({username:username,password:password}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.deleteAccount = function (username,password){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/",{method:"DELETE",body:JSON.stringify({username:username,password:password}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.update = function (username,password,data){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/update",{method:"PUT",body:JSON.stringify({username:username,password:password,data:data}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.get = function (username,password){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/",{method:"POST",body:JSON.stringify({username:username,password:password}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
wrappers.changePassword = function (username,password,newpw){
    return new Promise((resolve,reject)=>{
        fetch("https://blue-papyrus.glitch.me/password",{method:"POST",body:JSON.stringify({username:username,password:password,newPassword:newpw}),headers:{"Content-Type":"application/json"}}).then(e=>{
           return  e.json()
        }).then(e=>{
            resolve(e)
        }).catch(e=>reject(e))
    })
}
module.exports = wrappers