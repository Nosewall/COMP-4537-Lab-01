db.doggos.insert({name: 'Patches',
	dob: new Date(1992,2,13,7,47),
	loves: ['coffee','tennis-balls'],
	weight: 600,
	gender: 'm',
	mailmen: 63});
db.doggos.insert({name: 'Puppo',
	dob: new Date(1991, 0, 24, 13, 0),
	loves: ['coffee', 'carpets'],
	weight: 450,
	gender: 'f',
	mailmen: 43});
db.doggos.insert({name: 'Luna',
	dob: new Date(1973, 1, 9, 22, 10),
	loves: ['cats', 'dog-juice'],
	weight: 984,
	gender: 'm',
	mailmen: 182});
db.doggos.insert({name: 'Cai',
	dob: new Date(1979, 7, 18, 18, 44),
	loves: ['milk-bones'],
	weight: 575,
	gender: 'm',
	mailmen: 99});
db.doggos.insert({name: 'PapiDoge',
	dob: new Date(1985, 6, 4, 2, 1),
	loves:['milk-bones', 'coffee',
		'chocolate'],
	weight:550,
	gender:'f',
	mailmen:80});
db.doggos.insert({name:'Baebo',
	dob: new Date(1998, 2, 7, 8, 30),
	loves: ['milk', 'pig-ears'],
	weight: 733,
	gender: 'f',
	mailmen: 40});
db.doggos.insert({name:'Waffles',
	dob: new Date(1997, 6, 1, 10, 42),
	loves: ['carpets', 'pig-ears'],
	weight: 690,
	gender: 'm',
	mailmen: 39});
db.doggos.insert({name: 'Ussop',
	dob: new Date(2005, 4, 3, 0, 57),
	loves: ['milk-bones', 'spice'],
	weight: 421,
	gender: 'm',
	mailmen: 2});
db.doggos.insert({name: 'Hubert',
	dob: new Date(2001, 9, 8, 14, 53),
	loves: ['milk-bones', 'watermelon'],
	weight: 601,
	gender: 'f',
	mailmen: 33});
db.doggos.insert({name: 'Dasher',
	dob: new Date(1997, 2, 1, 5, 3),
	loves: ['milk-bones', 'watermelon'],
	weight: 650,
	gender: 'm',
	mailmen: 54});
db.doggos.insert({name: 'Clifford',
	dob: new Date(1999, 11, 20, 16, 15),
	loves: ['carpets', 'coffee'],
	weight: 540,
	gender: 'f'});
db.doggos.insert({name: 'Toffee',
	dob: new Date(1976, 6, 18, 18, 18),
	loves: ['carpets', 'watermelon'],
	weight: 704,
	gender: 'm',
	mailmen: 165});

db.doggos.find({gender: 'm',weight: {$gt: 700}});

db.doggos.find({gender: {$ne: 'f'},weight: {$gte: 701}});

db.doggos.find({mailmen: {$exists: false}});

db.doggos.find({loves: {$in:['milk-bones','orange']}});

db.doggos.insert({name: 'Good-Boy-7',
	dob: new Date(1976, 6, 18, 18, 18),
	loves: ['milk-bones', 'orange'],
	weight: 704,
	gender: 'm',
	mailmen: 165});

db.doggos.find({loves: {$in:['milk-bones','orange']}});

db.doggos.find({gender: 'f',$or: [{loves: 'milk-bones'},{weight: {$lt: 500}}]});

db.doggos.find({_id: ObjectId("TheObjectId")});

db.doggos.update({name: 'Cai'},{weight: 590});

db.doggos.find({name: 'Cai'});

db.doggos.update({weight: 590}, {$set: {name: 'Cai',dob: new Date(1979, 7, 18, 18, 44),loves: ['milk-bones'],gender: 'm',mailmen: 99}});

db.doggos.find({name: 'Cai'});

db.doggos.update({name: 'Cai'}, {$set: {weight: 590}});

db.doggos.update({name: 'Dasher'}, {$inc: {mailmen: -2}});

db.doggos.update({name: 'Puppo'}, {$push: {loves: 'spice'}});

db.hits.update({page: 'doggos'},{$inc: {hits: 1}});

db.hits.find();

db.hits.update({page: 'doggos'}, {$inc: {hits: 1}}, {upsert:true});

db.hits.find();

db.hits.update({page: 'doggos'},{$inc: {hits: 1}}, {upsert:true});

db.hits.find();

db.doggos.update({}, {$set: {vaccinated: true }});

db.doggos.find({vaccinated: true});

db.doggos.update({},{$set: {vaccinated: true }}, {multi:true});

db.doggos.find({vaccinated: true});

db.doggos.find({}, {name: 1});

db.doggos.find().sort({weight: -1});

db.doggos.find().sort({name: 1, mailmen: -1});

db.doggos.find().sort({weight: -1}).limit(2).skip(1);

db.doggos.count({mailmen: {$gt: 50}});

db.doggos.find({mailmen: {$gt: 50}}).count();