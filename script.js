function validateForm() {
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;
    const personNmbr = document.getElementById("inputPersonNmbr").value;
    const dateTime = document.getElementById("inputDateTime").value;

    if (!name || !email || personNmbr === "Izberite število oseb" || !dateTime) {
        alert("Prosimo, izpolnite vsa polja.");
        return false;
    } else {
        const confirmation = confirm("Oddajate rezervacijo za " + name + ", " + email + ", " + personNmbr + " oseb, ob " + new Date(dateTime).toLocaleString("sl-SI"));

        if (confirmation) {
            alert("Rezervacija je bila uspešno oddana!");
        }
    }
}