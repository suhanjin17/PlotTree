// Close the modal
function closeModal()
{
	document.getElementById('modal-overlay').style.display = 'none';
}

// Open the modal and populate data
function openModal(title, summary, detailObj)
{
	document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-summary').innerText = summary;

	const detailContainer = document.getElementById('modal-detail');
    // Clear previous content
    detailContainer.innerHTML = '';

	// Iterate over the arbitrary keys in detailObj
	if(detailObj)
	{
    	for (const [key, value] of Object.entries(detailObj))
		{
    	    // Create a wrapper div for each key-value pair
    	    const groupDiv = document.createElement('div');
    	    groupDiv.className = 'detail-group';

    	    // Create the strong tag for the key
    	    const keyElement = document.createElement('strong');
    	    keyElement.innerText = key + ": ";
        
    	    // Create the span tag for the value
    	    const valueElement = document.createElement('span');
    	    valueElement.innerText = value;
			
    	    groupDiv.appendChild(keyElement);
    	    groupDiv.appendChild(valueElement);
			
    	    detailContainer.appendChild(groupDiv);
    	}
	}
    document.getElementById('modal-overlay').style.display = 'flex';
}

document.addEventListener('nodeClicked', (e) =>
{
	openModal(e.detail.title, e.detail.summary, e.detail.detailObj);
});

// Close modal when clicking outside the box
window.onclick = function(event)
{
    var modal = document.getElementById('modal-overlay');
    if (event.target == modal)
		modal.style.display = "none";
}