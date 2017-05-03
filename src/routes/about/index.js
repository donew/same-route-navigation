/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';


export default {
/*Modified Path to read all followed url for RedPanda*/
  path: '/about*',

  async action() {
    const data = await require.ensure([], require => require('./about.md'), 'about');
    const company = await require.ensure([], require => require('./company.md'), 'company');

    return {
      title: data.title,
      chunk: 'about',
      component: <Layout><Page {...data} />
      <section id="aboutCompany">
      <Page {...company} />
      </section>
      </Layout>,
    };
  },

};
