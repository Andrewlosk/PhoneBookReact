import { schema } from "normalizr";

export const constactSchema = new schema.Entity("contacts");

export const contactsListSchema = [constactSchema];