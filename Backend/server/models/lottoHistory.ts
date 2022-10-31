import { Schema, model, Document, Model, ObjectId, Types } from "mongoose";

export interface GameParams {
  ticketingStart: number;
  ticketingDuration: number;
  withdrawalStart: number;
  ticketFee: number;
  luckyNumber: number;
  playersTicketBought: number;
  playersTicketChecked: number;
}

export interface Lotto extends Document {
  lottoId: number;
  gameParams: GameParams;
  roundStart: number;
  roundEnd: number;
  txReference: string;
}

interface LottoModel extends Model<Lotto> {}

const LottoSchema = new Schema<Lotto>({
  lottoId: {
    required: true,
    type: Number,
  },
  gameParams: { type: Object },
  roundStart: {
    required: true,
    type: Number,
  },
  roundEnd: {
    type: Number,
  },
  txReference: {},
});

export const LottoModel = model<Lotto, LottoModel>("LottoModel", LottoSchema);
