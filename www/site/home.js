
HW.App.controller('HWMSiteHomePage', [
    '$scope',
    function($scope){

	    var testList1 = [{
		    img : 'http://ionicframework.com/img/docs/siamese-dream.jpg',
		    name : '味道成都',
		    coupon : '全场满100送100',
		    num : 2114,
		    location : 'Fremont'
	    }];

	    $scope.couponList = testList1;

	    //HW.helper.loading.show();
    }
]);
