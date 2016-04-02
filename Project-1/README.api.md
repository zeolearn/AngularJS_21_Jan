# List of API required for the project
===============================================================
1. ServiceName: PromoCodesService (or any other of your choice)
API: GET 'http://zeolearn.cloudapp.net/api/v1/promo-codes/new'
Returns: JSON Array

2. ServiceName: AcceptedPromoCodesService
API: GET 'http://zeoelearn.cloudapp.net/api/v1/promo-codes/approve'
Returns: JSON Array

3. ServiceName: OffersService
Returns:
    var offers = [
      {id: 0, name:'All', filterValue:'', fullName: 'All'},
      {id: 1, name:'Offer1', filterValue:'Offer1', fullName: 'Offer 1'},
      {id: 2, name:'Offer2', filterValue:'Offer2', fullName: 'Offer 2'},
      {id: 3, name:'Offer3', filterValue:'Offer3', fullName: 'Offer 3'}
    ];
    return offers;

4. ServiceName: RejectedPromoCodesService
API: GET 'http://zeolearn.cloudapp.net/api/v1/promo-codes/reject'
Returns: JSON Array

5. ServiceName: PendingPromoCodesService (Optional)
API: GET 'http://zeolearn.cloudapp.net/api/v1/promo-codes/pending'
Returns: JSON Array 



