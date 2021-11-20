
let ragdoll = false;
let ragdollTimer = null;
RegisterCommand("ragdoll", () => {
	toggleRagdoll();
}, false);

const toggleRagdoll = () => {
	ragdoll = !ragdoll;
	if(ragdoll){
		ragdollTimer = setInterval(makeRagdoll, 0);
	}
	else {
		clearInterval(ragdollTimer);
		ragdollTimer = null;
	}
}

const makeRagdoll = () => {
	SetPedToRagdoll(PlayerPedId(), 2000, 2000, 0, 0, 0, 0)
}

setInterval(() => {
	if(IsControlJustPressed(2, 0x3C3DD371)) {
		toggleRagdoll();
	}
}, 0)

