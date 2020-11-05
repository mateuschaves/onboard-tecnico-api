import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import MemberFactory from './factories/member.factory';
import MemberTypeFactory from './factories/member-type.factory';
import MemberTypeService from '../server/api/services/member-type.service';

const { expect } = chai;

describe('Members', () => {
  it('should get 0 members when no one was created', () => request(Server)
    .get('/api/v1/member')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('rows');

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('page');

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('count');

      expect(r.body.rows)
        .to.be.an.an('array')
        .to.have.lengthOf(0);

      expect(r.body.page)
        .to.be.equal(1);

      expect(r.body.count)
        .to.be.equal(0);

      expect(r.body.count)
        .to.be.equal(r.body.rows.length);
    }));

  it('should return page and limit if was provided by the query params', () => request(Server)
    .get('/api/v1/member?page=90&limit=5')
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('rows');

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('page');

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('count');

      expect(r.body.rows)
        .to.be.an.an('array')
        .to.have.lengthOf(0);

      expect(r.body.page)
        .to.be.equal(90);

      expect(r.body.count)
        .to.be.equal(0);

      expect(r.body.count)
        .to.be.equal(r.body.rows.length);

      expect(r.body.count <= 5)
        .to.be.equal(true);
    }));

  it('should be able to create a member', async () => {
    const memberType = MemberTypeFactory.generate();
    await MemberTypeService.create(memberType.description, memberType.status);
    return request(Server)
      .post('/api/v1/member')
      .send(MemberFactory.generate())
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.status)
          .to.be.equal(201);

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('id');

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name');

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('email');

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('phone');

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('status');
      });
  });

  it('should not be able to create a member with an invalid body', () => request(Server)
    .post('/api/v1/member')
    .send({})
    .expect('Content-Type', /json/)
    .then(r => {
      expect(r.status)
        .to.be.equal(400);

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('validation_failed');

      expect(r.body)
        .to.be.an.an('object')
        .that.has.property('errors')
        .to.be.an.an('array')
        .to.have.lengthOf(7);
    }));

  it('should be able to update a existent member', _ => {
    const updateData = {
      name: 'Mateus H C A Morais',
      phone: '(81) 973248342',
      email: 'mateus.morais@maxxidata.com',
      status: 'test',
      memberType: 1,
    };
    console.log(MemberFactory.generate(
      updateData.name,
      updateData.phone,
      updateData.status,
      updateData.memberType,
    ));
    return request(Server)
      .put('/api/v1/member/1')
      .send(MemberFactory.generate(
        updateData.name,
        updateData.phone,
        updateData.status,
        updateData.memberType,
      ))
      .expect('Content-Type', /json/)
      .then(r => {
        expect(r.status)
          .to.be.equals(200);

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('id');

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('name')
          .to.be.equal(updateData.name);

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('email')
          .to.be.equal(updateData.email);

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('phone')
          .to.be.equal(updateData.phone);

        expect(r.body)
          .to.be.an.an('object')
          .that.has.property('status')
          .to.be.equal(updateData.status);
      });
  });
});
