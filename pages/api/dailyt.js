import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const { date } = req.query;

    const dataModel = { "_id": new ObjectID(), "date": date, "transaction1": {"name": '', "amount":0}}

    let doc = {}


    if(date){
        doc = await req.db.collection('dailytest').findOne({date: new Date(date)})
    } else {
        doc = await req.db.collection('dailytest').findOne()
    }

    if(date=='1810-09-16 00:00:00'){
      doc = await req.db.collection('dailytest').find().toArray();
    }

    if(doc == null){
        doc = dataModel
    }
    res.json(doc)
});

handler.post(async (req, res) => {
  let data = req.body;
  data = JSON.parse(data);
  data.date = new Date(data.date);
  let doc = await req.db.collection('dailytest').updateOne({date: new Date(data.date)}, {$set:data}, {upsert: true})

  res.json({message: 'ok'});
})

export default handler;
