import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ttmpglbwdpgywgswhxau.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bXBnbGJ3ZHBneXdnc3doeGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwOTU1NDksImV4cCI6MjAyNDY3MTU0OX0.OtuChPFEBl2LFIrU-OvO72QmYLOv72k9nyCao1woF_8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase