module.exports.resource = function($resource){
	return $resource('/api/standings',
	{
		getAll:{
			method:'GET',
			url:'api/standings',
			isArray: true,
			responseType: 'json'
		}
	});
};