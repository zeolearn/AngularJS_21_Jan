# List of API required for the project
===============================================================
1. ServiceName: PromoCodesService (or any other of your choice)
API: GET 'http://zeolearn.eastus.cloudapp.azure.com/api/v1/promo-codes/incoming'
Returns: JSON Array []
[
  {
    "_id": "5704060f3aa3ba513e69bf52",
    "Id": null,
    "Title": "General Information",
    "Description": "",
    "Organization": "AcmeInc",
    "OrgUnit": "HR",
    "PromoType": "customerservice",
    "PromoCode": "42424242",
    "Comments": "",
    "CurrentSortingOrder": 1,
    "OldSortingOrder": 1,
    "createdOn": "2016-02-25T15:24:05.000Z",
    "processed": "new",
    "reportInfo": {
      "reasonCode": 0,
      "reasonText": ""
    },
    "activeStatus": {
      "lastUpdated": "2016-02-25T15:24:05.000Z",
      "active": true
    }
  },
  {
    "_id": "5704060f3aa3ba513e69bf53",
    "Id": null,
    "Title": "General Information",
    "Description": "",
    "Organization": "AcmeInc",
    "OrgUnit": "HR",
    "PromoType": "customerservice",
    "PromoCode": "38456723",
    "Comments": "",
    "CurrentSortingOrder": 1,
    "OldSortingOrder": 1,
    "createdOn": "2016-02-25T15:24:05.000Z",
    "processed": "new",
    "reportInfo": {
      "reasonCode": 0,
      "reasonText": ""
    },
    "activeStatus": {
      "lastUpdated": "2016-02-25T15:24:05.000Z",
      "active": true
    }
  }
]

2. ServiceName: AcceptedPromoCodesService
API: GET 'http://zeoelearn.eastus.cloudapp.azure.com/api/v1/promo-codes/approved'
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
API: GET 'http://zeolearn.eastus.cloudapp.azure.com/api/v1/promo-codes/rejected'
Returns: JSON Array

5. ServiceName: PendingPromoCodesService (Optional)
API: GET 'http://zeolearn.eastus.cloudapp.azure.com/api/v1/promo-codes/pending'
Returns: JSON Array 
Sample: 
[
	{
		Id: Number,
		Title: String,
		Description: String,
		Organization: String,
		OrgUnit: String,
		PromoType: String,
		PromoCode: String,
		Comments: String,
		createdOn: ISODate(), //YYYY-MM-DDTHH:MM:SS.zzzZ e.g. 2016-04-01T15:24:31.000Z
		processed: String,
		reportInfo: { reasonCode: Number, reasonText: String },
		activeStatus: {}
}
]



