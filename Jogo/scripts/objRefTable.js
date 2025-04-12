const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Keyboard,
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Spritefont2,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Audio.Acts.Play,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.ScriptsInEvents.Primeiraparte_Event14_Act2,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.System.Acts.SubVar,
		C3.Behaviors.Platform.Cnds.IsFalling,
		C3.Behaviors.Platform.Acts.SetVectorY,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Sin.Exps.CyclePosition,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{jog_Ironfist: 0},
	{Keyboard: 0},
	{Âncora: 0},
	{PlanoDeFundoPrimeiraParte: 0},
	{Sólido: 0},
	{Bloco: 0},
	{Moeda: 0},
	{Agua: 0},
	{VIDAS: 0},
	{Portal: 0},
	{NomeFase: 0},
	{Lado: 0},
	{ProximaFase: 0},
	{PlanoDeFundoSegundaParte: 0},
	{Castelo: 0},
	{EntradaCastle: 0},
	{Chao2: 0},
	{Fogo: 0},
	{Áudio: 0},
	{Mouse: 0},
	{PlanoDeFundoEmBlocos: 0},
	{GameOver: 0},
	{GameOverLetra: 0},
	{PlayAgain: 0},
	{Yes: 0},
	{No: 0},
	{PlanoDeFundoInicio: 0},
	{Texto: 0},
	{Start: 0},
	{PortalFim: 0},
	{Fim: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Retry: 0},
	{Plataforma: 0},
	{Senóide: 0},
	{Dracula: 0},
	{Vidas: 0},
	{PassarFase: 0}
];

self.InstanceType = {
	jog_Ironfist: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	PlanoDeFundoPrimeiraParte: class extends self.ITiledBackgroundInstance {},
	Bloco: class extends self.ISpriteInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Agua: class extends self.ISpriteInstance {},
	VIDAS: class extends self.ITextInstance {},
	Portal: class extends self.ISpriteInstance {},
	ProximaFase: class extends self.ISpriteInstance {},
	PlanoDeFundoSegundaParte: class extends self.ITiledBackgroundInstance {},
	Castelo: class extends self.ISpriteInstance {},
	EntradaCastle: class extends self.ISpriteInstance {},
	Chao2: class extends self.ISpriteInstance {},
	Fogo: class extends self.ISpriteInstance {},
	Áudio: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	GameOver: class extends self.ITiledBackgroundInstance {},
	GameOverLetra: class extends self.ITextInstance {},
	PlayAgain: class extends self.ITextInstance {},
	Yes: class extends self.ISpriteFontInstance {},
	No: class extends self.ISpriteFontInstance {},
	PlanoDeFundoInicio: class extends self.ITiledBackgroundInstance {},
	Texto: class extends self.ITextInstance {},
	Start: class extends self.ISpriteFontInstance {},
	PortalFim: class extends self.ISpriteInstance {},
	Fim: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Retry: class extends self.ISpriteFontInstance {},
	Dracula: class extends self.ISpriteInstance {}
}