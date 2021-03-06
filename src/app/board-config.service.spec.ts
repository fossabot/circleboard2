import { TestBed, inject } from '@angular/core/testing';

import { BoardConfig } from './board-config.service';

describe('BoardConfig', () => {
  let config;
  beforeEach(() => {
    config = new BoardConfig({
      apiToken: 'initial-api-token',
      groupWorkflows: false
    });
  });

  describe('properties', () => {
    describe('groupWorkflows', () => {
      it('converts a "yes" to true', () => {
        config.groupWorkflows = 'yes';
        expect(config.groupWorkflows).toBeTruthy();
      });
      it('converts a "true" (string) to true', () => {
        config.groupWorkflows = 'true';
        expect(config.groupWorkflows).toBeTruthy();
      });
      it('converts a "no" to false', () => {
        config.groupWorkflows = 'no';
        expect(config.groupWorkflows).toBeFalsy();
      });
    });
  });
  describe('merge', () => {
    it('doesn’t change any config vars when the object is empty', () => {
      config.merge({});
      expect(config.apiToken).toEqual('initial-api-token');
      expect(config.groupWorkflows).toBeFalsy();
    });
    it('merges from the given params object', () => {
      config.merge({ apiToken: 'new-api-token' });
      expect(config.apiToken).toEqual('new-api-token');
      expect(config.groupWorkflows).toEqual(false);

      config.merge({ groupWorkflows: 'yes' });
      expect(config.apiToken).toEqual('new-api-token');
      expect(config.groupWorkflows).toEqual(true);
    });
  });
});
