

import { expect } from 'chai';
import User from '../../src/collections/users/user.collection';

describe('collections/User', () => {
  it('.create()', async () => {
    const email = `__test__${Date.now()}__@example.com`;
    const user = await User.create({ email });
    expect(user).to.be.ok;
    expect(user.id).to.be.ok;
    expect(user.email).to.be.equal(email);
    const existsTrue = await User.any({ email });
    const existsFalse = await User.any({ email: `${Date.now()}@example.com` });
    expect(existsTrue).to.be.true;
    expect(existsFalse).to.be.false;
  });
});
