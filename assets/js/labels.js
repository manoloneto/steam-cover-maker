// just add a new item in that array to add a new label
const labelsInfo = [
    {id: 'labelToggle-ps2', class: 'ps2', text: 'SteamStation 2'},
    {id: 'labelToggle-gba', class: 'gba', text: 'steam ADVANCE'},
];

function setupToggles(labelsInfo) {
    const topBar = document.getElementById('topBar');
    const inputContainer = document.querySelector('.input-container');

    labelsInfo.forEach(label => {
        document.getElementById(label.id).addEventListener('change', function () {
            const wasChecked = this.checked;

            labelsInfo.forEach(label => {
                document.getElementById(label.id).checked = false;
                topBar.classList.remove(label.class);
            });

            if (!wasChecked) {
                topBar.style.visibility = "hidden";
                inputContainer.style.display = 'none';
                topBar.textContent = "";
                customTextLabel.value = "";
            } else {
                this.checked = true;
                topBar.classList.add(label.class);
                topBar.style.visibility = "visible";
                inputContainer.style.display = 'flex';
                topBar.textContent = label.text;
                customTextLabel.value = label.text;
            }
        });
    });
}

setupToggles(labelsInfo);