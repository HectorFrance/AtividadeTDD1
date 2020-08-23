//exports.Calc = Calc;
exports.Calc = function(diasAtrasados, valorParcela){
		var juros;
		var valorfinal
		if ((diasAtrasados >= 5) && (diasAtrasados < 31)) {
			juros = (5/100) * valorParcela;
			valorfinal = (parseInt(valorParcela) + parseInt(juros)); 
			return parseInt(juros);
		}
		if ((diasAtrasados >= 31) && (diasAtrasados <= 60)) {
			juros = (10/100) * valorParcela;
			valorfinal = (parseInt(valorParcela) + parseInt(juros));
			return parseInt(juros);
		}
		if (diasAtrasados > 60) {
			juros = (15/100) * valorParcela;
			valorfinal = (parseInt(valorParcela) + parseInt(juros));
			return parseInt(juros);
		}
	}