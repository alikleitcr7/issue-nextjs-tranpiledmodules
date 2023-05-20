export interface KeyValue<TKey, TValue> {
  key: TKey;
  value: TValue;
}
export interface PaginatedResponse<T> {
  records: T[];
  totalCount: number;
}

export interface FormType {
  visible: boolean;
  isLoading: boolean;
  isSaving: boolean;
  isUploading?: boolean;
  message?: MessageType;
}

export type MessageTypeColor = "error" | "info" | "warning" | "success";
export interface MessageType {
  message: any;
  type?: MessageTypeColor;
}
