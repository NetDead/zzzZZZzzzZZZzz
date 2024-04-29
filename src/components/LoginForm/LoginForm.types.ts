import React from 'react';

export interface LoginFormTypes {
  onSubmit: (event: React.FormEvent) => Promise<void>;
}
