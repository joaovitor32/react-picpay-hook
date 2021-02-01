import { REFUSED } from 'dns';
import React from 'react';
import {ApiType} from './services/api';
import {PickpayHook} from './hooks/PicpayHook';

export declare const usePickpayHook:(body:ApiType)=>PickpayHook;