

const scriptsInEvents = {

	async Primeiraparte_Event14_Act2(runtime, localVars)
	{
		//obter o valor da variavel global vidas
		let vidas = runtime.globalVars.Vidas;
		
		//Reduzz uma vida
		vidas--;
		
		//Atualiza aa variavel global do construct 3
		runtime.globalVars.Vidas = vidas;
		
		//se vidas chegarem a 0, execite a açao
		if(vidas <=0){
		console.log("GameOver");
		runtime.goToLayout("GameOver")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
