import { computed, effect } from "@angular/core";
import { patchState, signalStore, watchState, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";

interface FavouriteItem {
    id: number;
    title: string;
    thumbnail: string;
    price: number;
    isFavourite: boolean;
}       

export const FavStore = signalStore( 
    {providedIn:'root'},
        withState<{ items: FavouriteItem[] }>({ items: [] }),
)