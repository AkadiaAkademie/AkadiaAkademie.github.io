let teamVisible=false;

function showTeam() {
    if (teamVisible) {
        document.getElementById('team').style.display = 'none';
        document.getElementById('team-arrow').style.display = 'none';
        document.getElementById('team-button').style.fontWeight = 'normal';
        teamVisible = false;
    } else {
        document.getElementById('team').style.display = 'block';
        document.getElementById('team-arrow').style.display = 'inline-block';
        document.getElementById('team-button').style.fontWeight = 'bold';
        window.scrollTo(0, document.body.scrollHeight);
        teamVisible = true;
    }
}