window.onload = function(){
	let newtask = document.getElementById('newtask')
	let addtask = document.getElementById('addtask')
	let todolist = document.getElementById('todolist')


	addtask.onclick = function(){
		let li = document.createElement('li')
		//li.innerText = newtask.value


		let xBtn = document.createElement('button')
		xBtn.innerText = '✖️'
		xBtn.onclick =  function (event) {
			event.target.parentElement.remove()
		}

		let upBtn = document.createElement('button')
		upBtn.innerText = '⬆'
		upBtn.onclick = function () {
			//event.target = Up Btn
			//event.target.parentElment = the <li> item
			//event.target.parentElment.parentElement = is the todolist
			
			event.target.parentElement.parentElement.insertBefore(
				event.target.parentElement, // insert this 
				event.target.parentElement.previousSibling   //before its parent
				)

		}

		let dwnBtn = document.createElement('button')
		dwnBtn.innerText = '⬇'
		dwnBtn.onclick = function () {
			//event.target = Up Btn
			//event.target.parentElment = the <li> item
			//event.target.parentElment.parentElement = is the todolist
			
			event.target.parentElement.parentElement.insertBefore(
				
				event.target.parentElement.nextElementSibling ,  //before its parent
				event.target.parentElement // insert this 
				)

		}


		// Add Task text
		let taskspan = document.createElement('span')
		taskspan.innerText = newtask.value






		li.appendChild(xBtn)
		li.appendChild(upBtn)
		li.appendChild(dwnBtn)
		li.appendChild(taskspan)
		todolist.appendChild(li)

	} 
}



//⬆⬇✖️❎FF
