import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hrerbfzoabxkkvvfwdyh.supabase.co";
const supabaseKey = "sb_publishable_A7xNf3KXZ0G3zOuUNxQeVQ_BtoXWaCI";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);